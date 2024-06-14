export default abstract class AbstractError extends Error
{
    /**
     * Returns the HTTP status code of this error.
     * List of HTTP status codes : https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
     */
    abstract get code(): number;

    constructor(message: string)
    {
        super(message);
    }

    public toJSON():object
    {
        return {
            code: this.code,
            message: this.message
        };
    }
}
