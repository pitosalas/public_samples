# README

This is a very small illustration of a more complicated many to many scenario

* Students can register for many course and can also be a TAs for  many courses
* A course can have many students and many tas

So the relationship between courses and students is many to many, but in two different meanings.

#### Tips

* You can generate a scaffold with immediate knowledge that the columns will become foreign keys, as follows:

```
rails generate scaffold registrations student:references course:references
```

* You can add a new record to an association with this neat shortcut:

Student.courses << Course.where(name: "166")

You can define the two semantics of how Students and Courses relate with the following:

```
class Student < ApplicationRecord
  has_many :registrations
  has_many :courses, through: :registrations

  has_many :tas
  has_many :tajobs, through: :tas, source: :course
end
```