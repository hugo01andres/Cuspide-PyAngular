"""2_Table_Tasks

Revision ID: 73852931aea4
Revises: 73d7879c387a
Create Date: 2023-10-28 08:14:11.016624

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '73852931aea4'
down_revision = '73d7879c387a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tasks',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tasks')
    # ### end Alembic commands ###
