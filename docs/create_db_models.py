# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

# Define the base class for declarative class definitions
Base = declarative_base()

# Define models
class User(Base):
    """description: Table for storing user information."""
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=True)
    email = Column(String, nullable=True)
    join_date = Column(DateTime, default=datetime.datetime.utcnow)

class Business(Base):
    """description: Table representing businesses within neighborhoods."""
    __tablename__ = 'businesses'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=True)
    address = Column(String, nullable=True)
    zip_code = Column(String, nullable=True)
    category = Column(String, nullable=True)

class Neighborhood(Base):
    """description: Table containing data about neighborhoods."""
    __tablename__ = 'neighborhoods'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=True)
    zip_code = Column(String, nullable=True)
    city = Column(String, nullable=True)
    population = Column(Integer)

class ConsumerPreference(Base):
    """description: Table for storing consumer preferences for analysis."""
    __tablename__ = 'consumer_preferences'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    preference = Column(String, nullable=True)
    weight = Column(Float)

class BehavioralPattern(Base):
    """description: Table representing behavioral patterns in different communities."""
    __tablename__ = 'behavioral_patterns'
    id = Column(Integer, primary_key=True, autoincrement=True)
    pattern_type = Column(String, nullable=True)
    description = Column(Text)

class Report(Base):
    """description: Table for generating and storing custom reports."""
    __tablename__ = 'reports'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    content = Column(Text)
    generated_on = Column(DateTime, default=datetime.datetime.utcnow)

class ZipCodeData(Base):
    """description: Table storing aggregated data related to specific ZIP codes."""
    __tablename__ = 'zip_code_data'
    id = Column(Integer, primary_key=True, autoincrement=True)
    zip_code = Column(String, nullable=True)
    population_density = Column(Float)
    average_income = Column(Float)

class Insight(Base):
    """description: Table for storing generated insights."""
    __tablename__ = 'insights'
    id = Column(Integer, primary_key=True, autoincrement=True)
    neighborhood_id = Column(Integer, ForeignKey('neighborhoods.id'))
    insight_type = Column(String, nullable=True)
    detail = Column(Text)

class Event(Base):
    """description: Table representing events capturing significant occurrences in communities."""
    __tablename__ = 'events'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=True)
    date = Column(DateTime, default=datetime.datetime.utcnow)
    neighborhood_id = Column(Integer, ForeignKey('neighborhoods.id'))

class UserInteraction(Base):
    """description: Table for recording user interactions with the platform."""
    __tablename__ = 'user_interactions'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    interaction_type = Column(String, nullable=True)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

class Story(Base):
    """description: Table for generating custom storytelling elements in reports."""
    __tablename__ = 'stories'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    title = Column(String, nullable=True)
    narrative = Column(Text)

class PreferenceCategory(Base):
    """description: Table for categorizing different consumer preferences."""
    __tablename__ = 'preference_categories'
    id = Column(Integer, primary_key=True, autoincrement=True)
    category_name = Column(String, nullable=True)

class BusinessInsight(Base):
    """description: Table linking businesses with specific insights."""
    __tablename__ = 'business_insights'
    id = Column(Integer, primary_key=True, autoincrement=True)
    business_id = Column(Integer, ForeignKey('businesses.id'))
    insight_id = Column(Integer, ForeignKey('insights.id'))

class ZipCodeReport(Base):
    """description: Table linking specific ZIP codes to reports."""
    __tablename__ = 'zip_code_reports'
    id = Column(Integer, primary_key=True, autoincrement=True)
    zip_code_data_id = Column(Integer, ForeignKey('zip_code_data.id'))
    report_id = Column(Integer, ForeignKey('reports.id'))

# Create the SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')

# Create all tables in the database
Base.metadata.create_all(engine)

# Create a configured "Session" class and a session
Session = sessionmaker(bind=engine)
session = Session()

# Add sample data
user = User(name="John Doe", email="john.doe@example.com")
business = Business(name="Local Cafe", address="123 Main St", zip_code="90210", category="Food & Beverage")
neighborhood = Neighborhood(name="Downtown", zip_code="90210", city="Metropolis", population=10000)
consumer_preference = ConsumerPreference(user_id=1, preference="Eco-friendly Products", weight=0.8)
behavioral_pattern = BehavioralPattern(pattern_type="Morning Routine", description="Most residents exercise between 6-7 AM.")
report = Report(user_id=1, content="Custom report content.")
zip_code_data = ZipCodeData(zip_code="90210", population_density=2500.5, average_income=60000.0)
insight = Insight(neighborhood_id=1, insight_type="Trend", detail="Increase in local business.")
event = Event(title="Community Cleanup", neighborhood_id=1)
user_interaction = UserInteraction(user_id=1, interaction_type="Viewed Map")
story = Story(user_id=1, title="Local Business Growth", narrative="Businesses are thriving due to commuter traffic.")
preference_category = PreferenceCategory(category_name="Sustainability")
business_insight = BusinessInsight(business_id=1, insight_id=1)
zip_code_report = ZipCodeReport(zip_code_data_id=1, report_id=1)

# Adding entities to the session
session.add(user)
session.add(business)
session.add(neighborhood)
session.add(consumer_preference)
session.add(behavioral_pattern)
session.add(report)
session.add(zip_code_data)
session.add(insight)
session.add(event)
session.add(user_interaction)
session.add(story)
session.add(preference_category)
session.add(business_insight)
session.add(zip_code_report)

# Commit the session, saving all objects to the database
session.commit()

# Close the session
session.close()
