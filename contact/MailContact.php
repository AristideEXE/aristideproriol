<?php

class MailContact{
    private string $mail;
    private string $nom;
    private string $prenom;
    private string $objet;
    private string $message;

    public function __construct(string $mail, string $nom, string $prenom, string $objet, string $message)
    {
        $this->mail = $mail;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->objet = $objet;
        $this->message = $message;
    }

    public function Body() : string
    {
        $body = "
        <div>
            <h1>$this->objet</h1>
            <p>$this->message</p>
            <a href=\"#\">Bloquer cette adresse mail</a>
        </div>";
        return $body;
    }

    public function Headers() : string{
        return "From:$this->mail\r\n
                Reply-to:$this->mail\r\n
                X-Mailer: PHP/" . phpversion() . "\r\n
                Content-Type : text/html; charset=UTF-8";
    }

    public function Send(){
        mail("contact@aristideproriol.com", $this->objet, $this->Body());
    }
}