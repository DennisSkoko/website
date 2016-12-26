<?php

namespace DS\Support;

class MarkdownParser extends \Parsedown
{
    /**
     * Retrieves the contents from the file, parses it and return the result.
     *
     * @param $file
     *
     * @return string
     */
    public function file($file)
    {
        if (!(file_exists($file) && is_readable($file))) {
            throw new \RuntimeException(
                'The file doesn\'nt exist or is not readable.'
            );
        }

        $contents = file_get_contents($file);

        return $this->text($contents);
    }
}
