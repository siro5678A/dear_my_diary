"""empty message

Revision ID: cad7857f174b
Revises: 
Create Date: 2022-05-26 07:45:04.496978

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cad7857f174b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('month_plan',
    sa.Column('content', sa.Text(), nullable=True),
    sa.Column('id', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('year_plan',
    sa.Column('content', sa.Text(), nullable=True),
    sa.Column('id', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('year_plan')
    op.drop_table('month_plan')
    # ### end Alembic commands ###
