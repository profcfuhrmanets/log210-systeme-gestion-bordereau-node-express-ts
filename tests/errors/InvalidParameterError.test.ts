import { describe, expect, it } from 'vitest';
import { InvalidParameterError } from "../../src/errors/InvalidParameterError";

describe("InvalidParameterError", () =>
{ 
    it("returns the proper HTTP status code", () =>
    {
        expect((new InvalidParameterError("Invalid")).code).toEqual(400);
    });
});
