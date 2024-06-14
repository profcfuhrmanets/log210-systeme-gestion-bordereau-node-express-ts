import AbstractError from "./AbstractError";

export class InvalidParameterError extends AbstractError
{
    public readonly code = 400;
}
