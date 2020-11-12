class christmascoreutils {
    levels = {
        EXCEPTION : "EXCEPTION",
        ERROR : "ERROR",
        WARNING : "WARNING",
        DEBUG : "DEBUG"
    }

    HandleExcp(severity, f_class, f_func, ex) {        
        var date = "[" + new Date().toLocaleDateString() + "]";
        var formatted = severity +" "+ date + " ["+f_class+"] " + "["+f_func+"] " + ex;
        switch (severity) {
            case this.levels.EXCEPTION:
                console.exception(formatted);
                break;
            case this.levels.ERROR:
                console.error(formatted);
                break;
            case this.levels.WARNING:
                console.warn(formatted);
                break;
            case this.levels.DEBUG:
                console.debug(formatted);
                break;
            default:
                console.error(formatted);
                break;
        }
        return formatted;
    }
}