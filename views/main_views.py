from flask import Blueprint, render_template
from models import YearPlan

bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/templates/plan.html/')
def plan():
    year_list = YearPlan.query.order_by(YearPlan.id.asc())
    return render_template('plan.html', year_list=year_list)

@bp.route('/templates/memo.html/')
def memo():
    return render_template('memo.html')
@bp.route('/templates/diarypage_table.html/')
def diarypage():
    return render_template('diarypage_table.html')
@bp.route('/templates/board.html/')
def board():
    return render_template('board.html')