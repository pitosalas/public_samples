require 'json'
require 'xmlsimple'
require 'byebug'
#
# This example illustrates conversions between JSON, XML and Ruby Hashes which are often
# required when working with web services.
#

person_as_json_string = '{"name": "Pito", "town": "Arlington"}'
puts "Person record String in JSON format #{person_as_json_string}"
person_as_ruby_hash = JSON.parse(person_as_json_string)
puts "Result of converting that string into a Hash: #{person_as_ruby_hash}"

puts "******* RETURN to continue"; gets
person_list_as_hash = '[{"name": "Pito", "town": "Arlington"},
                   {"name": "Chris", "town": "Willemstad"},
                   {"name": "Amin", "town": "Lafayette"}]'
puts "Person list string in json format: "
puts person_list_as_hash
person_list_as_string = JSON.parse(person_list_as_hash)
puts "REsult of converting it to a hash"
puts person_list_as_string

puts "******* RETURN to continue"; gets
person_as_xml_string = <<EOS
<?xml version="1.0" encoding="UTF-8"?>
<student>
  <name>
    Pito Salas
  </name>
  <gender>
    male
  </gender>
</student>
EOS
puts "Person record String in XML format"
puts person_as_xml_string
puts "\nResult of converting it to a hash:"
xml_hash = XmlSimple.xml_in(person_as_xml_string)
puts xml_hash
puts "\nResult of converting it back to JSON"
xml_json = xml_hash.to_json
puts xml_json

