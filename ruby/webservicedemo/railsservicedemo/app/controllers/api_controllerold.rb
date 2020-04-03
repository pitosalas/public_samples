class ApiController < ApplicationController
  respond_to :xml, :json

  def course_info
    raise "Invalid Request" if params[:course].nil?
    # Pretend that we accessed the database to gather info and assemble
    # it into a hash called "result"
    result =  { name: "Introduction to Logic",
                number: "PHIL 100",
                date: "Jan-3-2014",
                lectures: [
                  { name: "Welcome to class" },
                  { name: "Difference between AND AND OR"},
                  { name: "Finall Exam"}
                ]
              }
    respond_to do |format|
      format.json { render :json => result }
      format.xml  { render :xml => result }
    end
  end

  def school_info
  end

  def lecture_info
  end
end
