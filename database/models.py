# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 17, 2024 13:24:34
# Database: sqlite:////tmp/tmp.ximZORJlXE/Enchiridion/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class BehavioralPattern(SAFRSBaseX, Base):
    """
    description: Table representing behavioral patterns in different communities.
    """
    __tablename__ = 'behavioral_patterns'
    _s_collection_name = 'BehavioralPattern'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    pattern_type = Column(String)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)



class Business(SAFRSBaseX, Base):
    """
    description: Table representing businesses within neighborhoods.
    """
    __tablename__ = 'businesses'
    _s_collection_name = 'Business'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    address = Column(String)
    zip_code = Column(String)
    category = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    BusinessInsightList : Mapped[List["BusinessInsight"]] = relationship(back_populates="business")



class Neighborhood(SAFRSBaseX, Base):
    """
    description: Table containing data about neighborhoods.
    """
    __tablename__ = 'neighborhoods'
    _s_collection_name = 'Neighborhood'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    zip_code = Column(String)
    city = Column(String)
    population = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    EventList : Mapped[List["Event"]] = relationship(back_populates="neighborhood")
    InsightList : Mapped[List["Insight"]] = relationship(back_populates="neighborhood")



class PreferenceCategory(SAFRSBaseX, Base):
    """
    description: Table for categorizing different consumer preferences.
    """
    __tablename__ = 'preference_categories'
    _s_collection_name = 'PreferenceCategory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    category_name = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class User(SAFRSBaseX, Base):
    """
    description: Table for storing user information.
    """
    __tablename__ = 'users'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    join_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    ConsumerPreferenceList : Mapped[List["ConsumerPreference"]] = relationship(back_populates="user")
    ReportList : Mapped[List["Report"]] = relationship(back_populates="user")
    StoryList : Mapped[List["Story"]] = relationship(back_populates="user")
    UserInteractionList : Mapped[List["UserInteraction"]] = relationship(back_populates="user")



class ZipCodeDatum(SAFRSBaseX, Base):
    """
    description: Table storing aggregated data related to specific ZIP codes.
    """
    __tablename__ = 'zip_code_data'
    _s_collection_name = 'ZipCodeDatum'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    zip_code = Column(String)
    population_density = Column(Float)
    average_income = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    ZipCodeReportList : Mapped[List["ZipCodeReport"]] = relationship(back_populates="zip_code_data")



class ConsumerPreference(SAFRSBaseX, Base):
    """
    description: Table for storing consumer preferences for analysis.
    """
    __tablename__ = 'consumer_preferences'
    _s_collection_name = 'ConsumerPreference'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    preference = Column(String)
    weight = Column(Float)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("ConsumerPreferenceList"))

    # child relationships (access children)



class Event(SAFRSBaseX, Base):
    """
    description: Table representing events capturing significant occurrences in communities.
    """
    __tablename__ = 'events'
    _s_collection_name = 'Event'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    date = Column(DateTime)
    neighborhood_id = Column(ForeignKey('neighborhoods.id'))

    # parent relationships (access parent)
    neighborhood : Mapped["Neighborhood"] = relationship(back_populates=("EventList"))

    # child relationships (access children)



class Insight(SAFRSBaseX, Base):
    """
    description: Table for storing generated insights.
    """
    __tablename__ = 'insights'
    _s_collection_name = 'Insight'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    neighborhood_id = Column(ForeignKey('neighborhoods.id'))
    insight_type = Column(String)
    detail = Column(Text)

    # parent relationships (access parent)
    neighborhood : Mapped["Neighborhood"] = relationship(back_populates=("InsightList"))

    # child relationships (access children)
    BusinessInsightList : Mapped[List["BusinessInsight"]] = relationship(back_populates="insight")



class Report(SAFRSBaseX, Base):
    """
    description: Table for generating and storing custom reports.
    """
    __tablename__ = 'reports'
    _s_collection_name = 'Report'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    content = Column(Text)
    generated_on = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("ReportList"))

    # child relationships (access children)
    ZipCodeReportList : Mapped[List["ZipCodeReport"]] = relationship(back_populates="report")



class Story(SAFRSBaseX, Base):
    """
    description: Table for generating custom storytelling elements in reports.
    """
    __tablename__ = 'stories'
    _s_collection_name = 'Story'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    title = Column(String)
    narrative = Column(Text)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("StoryList"))

    # child relationships (access children)



class UserInteraction(SAFRSBaseX, Base):
    """
    description: Table for recording user interactions with the platform.
    """
    __tablename__ = 'user_interactions'
    _s_collection_name = 'UserInteraction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'))
    interaction_type = Column(String)
    timestamp = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserInteractionList"))

    # child relationships (access children)



class BusinessInsight(SAFRSBaseX, Base):
    """
    description: Table linking businesses with specific insights.
    """
    __tablename__ = 'business_insights'
    _s_collection_name = 'BusinessInsight'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    business_id = Column(ForeignKey('businesses.id'))
    insight_id = Column(ForeignKey('insights.id'))

    # parent relationships (access parent)
    business : Mapped["Business"] = relationship(back_populates=("BusinessInsightList"))
    insight : Mapped["Insight"] = relationship(back_populates=("BusinessInsightList"))

    # child relationships (access children)



class ZipCodeReport(SAFRSBaseX, Base):
    """
    description: Table linking specific ZIP codes to reports.
    """
    __tablename__ = 'zip_code_reports'
    _s_collection_name = 'ZipCodeReport'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    zip_code_data_id = Column(ForeignKey('zip_code_data.id'))
    report_id = Column(ForeignKey('reports.id'))

    # parent relationships (access parent)
    report : Mapped["Report"] = relationship(back_populates=("ZipCodeReportList"))
    zip_code_data : Mapped["ZipCodeDatum"] = relationship(back_populates=("ZipCodeReportList"))

    # child relationships (access children)
