import { NotFoundError } from "../../src/errors/NotFoundError";

describe("NotFoundError", () =>
{ 
    it("returns the proper HTTP status code", () =>
    {
        expect((new NotFoundError("Not found")).code).toEqual(404);
    });
});
