import { describe, expect, it } from 'vitest';
import { InternalError } from "../../src/errors/InternalError";

describe("InternalError", () =>
{ 
    it("returns the proper HTTP status code and the proper message", () =>
    {
        let error = new InternalError();

        expect(error.code).toEqual(500);
        expect(error.message).toEqual("Internal Server Error. There may be a bug in this system, please open a bug report in the GitHub repository.");
    });
});
