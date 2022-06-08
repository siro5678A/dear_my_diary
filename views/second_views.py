from flask import Blueprint, url_for, request
from werkzeug.utils import redirect
from datetime import datetime

from diary import db
from models import YearPlan

bp = Blueprint('year', __name__, url_prefix='/year')

@bp.route('/create/', methods=('POST','GET'))
def create():
    content = request.form['content']
    yp = YearPlan(content=content)
    db.session.add(yp)
    db.session.commit()
    return redirect(url_for('main.plan'))