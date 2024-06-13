import AbstractError from "./AbstractError";

export class InternalError extends AbstractError
{
    public readonly code = 500;

    constructor()
    {
        super("Internal Server Error. There may be a bug in this system, please open a bug report in the GitHub repository.");
    }
}
