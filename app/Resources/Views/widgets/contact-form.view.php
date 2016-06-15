<?php use \DS\Utilities\Url; ?>
<div class="container">
    <form method="post" action="<?= Url::make("contact/send") ?>" class="col-lg-6 col-lg-push-3">
        <div class="form-group">
            <label for="name">Name</label>
            <input class="form-control" id="name" name="name">
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input class="form-control" id="email" name="email">
        </div>
        <div class="form-group">
            <label for="subject">Subject</label>
            <input class="form-control" id="subject" name="subject">
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" name="message" style="resize: vertical; min-height: 200px"></textarea>
        </div>
        <div class="text-right">
            <button type="submit" class="btn btn-primary">Send</button>
        </div>
    </form>
</div>