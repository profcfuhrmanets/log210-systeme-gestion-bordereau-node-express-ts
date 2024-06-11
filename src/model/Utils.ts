export module Utils
{
    function isFunction(func: any)
    {
        return Object.prototype.toString.call(func) === '[object Function]';
    }
}

