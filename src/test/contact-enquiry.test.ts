import { describe, it, expect } from "vitest";
import {
  cleanEnquiry,
  RateLimiter,
  OWNER_EMAIL,
  LIMITS,
} from "../../supabase/functions/_shared/enquiry-validation";

const UUID = "3f2504e0-4f89-41d3-9a0c-0305e82c3301";

const valid = {
  from_name: "Jane Whitfield",
  reply_to: "jane@brunelgroup.co.uk",
  phone: "07944 885705",
  company: "Brunel Group",
  service: "Planned Preventative Maintenance",
  message: "We would like a quote for three London sites.",
  submission_id: UUID,
};

describe("enquiry notification recipient", () => {
  it("sends enquiry alerts to the corrected ltm address, not the itm typo", () => {
    expect(OWNER_EMAIL).toBe("info@ltm-ukservices.co.uk");
  });
});

describe("cleanEnquiry", () => {
  it("accepts a complete submission and returns trimmed fields", () => {
    const result = cleanEnquiry({ ...valid, from_name: "  Jane Whitfield  " });
    expect(result).toEqual({
      ok: true,
      enquiry: {
        name: "Jane Whitfield",
        email: "jane@brunelgroup.co.uk",
        phone: "07944 885705",
        company: "Brunel Group",
        service: "Planned Preventative Maintenance",
        message: "We would like a quote for three London sites.",
        submissionId: UUID,
      },
    });
  });

  it("rejects a missing name", () => {
    expect(cleanEnquiry({ ...valid, from_name: "   " }).ok).toBe(false);
  });

  it("rejects a missing message", () => {
    expect(cleanEnquiry({ ...valid, message: "" })).toEqual({
      ok: false,
      reason: "message_required",
    });
  });

  it("rejects a malformed email address", () => {
    expect(cleanEnquiry({ ...valid, reply_to: "not-an-email" })).toEqual({
      ok: false,
      reason: "email_invalid",
    });
  });

  it("rejects a submission id that is not a uuid, so retries cannot be deduped", () => {
    expect(cleanEnquiry({ ...valid, submission_id: "1" })).toEqual({
      ok: false,
      reason: "submission_id_invalid",
    });
  });

  it("caps the message at the stored length limit", () => {
    const result = cleanEnquiry({ ...valid, message: "a".repeat(LIMITS.message + 500) });
    if (!result.ok) throw new Error("expected submission to be accepted");
    expect(result.enquiry.message).toHaveLength(LIMITS.message);
  });
});

describe("RateLimiter", () => {
  it("allows the allowance then blocks the next attempt", () => {
    const limiter = new RateLimiter(5, 60_000);
    for (let i = 0; i < 5; i++) {
      expect(limiter.hit("ip:1.2.3.4")).toBe(false);
    }
    expect(limiter.hit("ip:1.2.3.4")).toBe(true);
  });

  it("tracks each sender separately", () => {
    const limiter = new RateLimiter(1, 60_000);
    expect(limiter.hit("email:a@x.test")).toBe(false);
    expect(limiter.hit("email:b@x.test")).toBe(false);
    expect(limiter.hit("email:a@x.test")).toBe(true);
  });

  it("opens a new window once the old one expires", () => {
    let now = 0;
    const limiter = new RateLimiter(2, 60_000, () => now);
    expect(limiter.hit("ip:1.2.3.4")).toBe(false);
    expect(limiter.hit("ip:1.2.3.4")).toBe(false);
    expect(limiter.hit("ip:1.2.3.4")).toBe(true);
    now = 60_000;
    expect(limiter.hit("ip:1.2.3.4")).toBe(false);
  });
});
