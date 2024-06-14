import AbstractError from "./AbstractError";

export class NotFoundError extends AbstractError
{
    public readonly code = 404;
}
