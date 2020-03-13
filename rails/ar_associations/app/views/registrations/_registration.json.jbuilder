json.extract! registration, :id, :student_id, :course_id, :created_at, :updated_at
json.url registration_url(registration, format: :json)
