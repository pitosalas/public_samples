class ApiController < ApplicationController
  def school_info
    raise "Invalid Request" if params[:school_code].nil?
    result = {name: "Brandeis University",
               address: "Waltham"}
    respond_to do |format|
      format.json { render json: result }
      format.xml  { render json: result }
    end
  end

  def course_info
    raise "Invalid Request" if params[:course_code].nil?
    # Pretend that we accessed the database to gather info and assemble
    # it into a hash called "result"
    result = {name: "Introduction to Logic",
                number: "PHIL 100",
                date: "Jan-3-2014",
                lectures: [
                  {name: "Welcome to class"},
                  {name: "Difference between AND AND OR"},
                  {name: "Final Exam"}
                ]}
    respond_to do |format|
      format.json { render json: result }
      format.xml  { render xml: result }
    end
  end

  def student_info
    raise "Invalid Request" if params[:student_code].nil?
    result = {name: "Pito Salas",
               address: "Arlington"}
    respond_to do |format|
      format.json {render json: result }
      format.xml  {render xml: result }
    end
  end
end
