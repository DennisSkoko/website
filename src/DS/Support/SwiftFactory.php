<?php

namespace DS\Support;

/**
 * A wrapper for Swiftmailer.
 */
class SwiftFactory
{
    /**
     * @var \Swift_Mailer
     */
    protected $mailer;

    /**
     * @var array
     */
    protected $config;


    /**
     * SwiftFactory constructor.
     *
     * @param array            $config
     */
    public function __construct(array $config)
    {
        $transport = new \Swift_SmtpTransport(
            $config["transport"]["host"],
            $config["transport"]["port"],
            $config["transport"]["security"]
        );

        $transport
            ->setUsername($config["user"])
            ->setPassword($config["pass"]);

        if ($config["debug"]) {
            $transport
                ->registerPlugin(new \Swift_Plugins_LoggerPlugin(new \Swift_Plugins_Loggers_EchoLogger()));
        }

        $this->mailer = new \Swift_Mailer($transport);
        $this->config = $config;
    }


    /**
     * @return \Swift_Message
     */
    public function message()
    {
        $message = new \Swift_Message();

        $message->setCharset($this->config["charset"]);

        $message->setFrom(
            $this->config["from"]["email"],
            $this->config["from"]["name"]
        );

        return $message;
    }


    /**
     * @param \Swift_Message $message
     * @param array          $failed
     *
     * @return int
     */
    public function send(\Swift_Message $message, array &$failed = null)
    {
        return $this->mailer->send($message, $failed);
    }
}
