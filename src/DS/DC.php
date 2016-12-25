<?php

namespace DS;

/**
 * This holds a global container for classes that are out of reach from the container.
 *
 * @method static mixed get(string $key)
 * @method static bool  has(string $key)
 */
class DC
{
    /**
     * @var Container
     */
    protected static $container;


    /**
     * @param Container $container
     */
    public static function setContainer(Container $container)
    {
        self::$container = $container;
    }


    /**
     * @return Container
     */
    public static function getContainer()
    {
        return self::$container;
    }


    /**
     * Allows using the container globally.
     *
     * @param string $name
     * @param array  $arguments
     *
     * @return mixed
     */
    public static function __callStatic($name, $arguments)
    {
        if (self::$container === null) {
            throw new \RuntimeException(
                'You need to set a container as global before you can access the contents.'
            );
        }

        if (method_exists(self::$container, $name)) {
            return call_user_func_array([self::$container, $name], $arguments);
        } else {
            throw new \BadMethodCallException(
                'There is no defined function with the name: "' . $name . '".'
            );
        }
    }
}
