from diary import db

class YearPlan(db.Model):
    content = db.Column(db.Text(), nullable=True)
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

class MonthPlan(db.Model):
    content = db.Column(db.Text(), nullable=True)
    id = db.Column(db.String(), primary_key=True)