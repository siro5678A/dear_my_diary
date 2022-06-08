from flask import Flask, render_template
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

import config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(config)

    db.init_app(app)
    migrate.init_app(app, db)
    import models

    from views import main_views, second_views
    app.register_blueprint(main_views.bp)
    app.register_blueprint(second_views.bp)
    return app



