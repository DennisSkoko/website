<?php

namespace DS\Commands;

use DS\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class LessCompiler extends Command
{
    /**
     * @var array
     */
    protected $settings;

    /**
     * @var \Less_Parser
     */
    protected $compiler;


    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('compile-less')
            ->setHelp('Compiles the LESS file into CSS')
            ->setDescription('Fetches all of the LESS files and outputs them in the CSS folder.');
    }


    /**
     * {@inheritdoc}
     */
    protected function initialize(InputInterface $input, OutputInterface $output)
    {
        $this->settings = $this->container->settings['less-compiler'];
        $this->compiler = new \Less_Parser();
    }


    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $files = glob($this->settings['input'] . DIRECTORY_SEPARATOR . '*.less');

        foreach ($files as $file) {
            $css = $this->compiler
                ->parseFile($file, '../')
                ->getCss();

            $cssFile = $this->settings['output'] . DIRECTORY_SEPARATOR . $this->filename($file) . '.css';
            file_put_contents($cssFile, $css);

            $output->writeln('Compiled ' . $cssFile);
            $this->compiler->Reset();
        }
    }


    /**
     * Parses a path and returns the filename only.
     *
     * @param string $path      - The path to the file.
     *
     * @return string - The filename
     */
    protected function filename($path)
    {
        $start = strrpos($path, DIRECTORY_SEPARATOR) + 1;
        $filename = $start !== false ? substr($path, $start) : $path;
        $length = strpos($filename, '.');

        return substr($filename, 0, $length);
    }
}
