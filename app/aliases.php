<?php

/**
 * An alias for Path::make()
 *
 * @param array|string $path - The path as a string or an array to the file from the project root.
 * @param string       $file - The name of the file.
 *
 * @return string
 */
function path($path, $file = "")
{
    return \Honth\FileHandler\Path::make($path, $file);
}
