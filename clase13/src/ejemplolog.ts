export default () => {
    var log4js = require("log4js");
    var logger = log4js.getLogger();
    logger.level = process.env.NIVEL_LOG;
    logger.trace("Este es el nivel de trace")    
    logger.debug("Some debug messages")
    logger.info("Este de de info")
    logger.warn("Este de warning")
    logger.error("Este es un mensaje de error")
}

