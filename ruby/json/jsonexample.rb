require 'json'

puts "Convert from an array to Json:"
puts [1,2,3].to_json

puts "\nConvert from a hash to json:"
puts ({ name: "Jonathan", birthday: "Dec 1, 1991" }.to_json)

puts "\nConvert from an arbitrary class:"
class Car
  def initialize make, model
    @make = make
    @model = model
  end

  def to_json
    {'make' => @make, 'model' => @model}.to_json
  end
end

c = Car.new("Toyota", "Corlla")
puts c.to_json

puts "\nAnd the other way around"
name_hash = '{"name": "Pito", "town": "Arlington"}'
puts JSON.parse(name_hash)

name_list_hash = '[{"name": "Pito", "town": "Arlington"},
                   {"name": "Chris", "town": "Willemstad"},
                   {"name": "Amin", "town": "Lafayette"}]'
puts JSON.parse(name_list_hash)

puts "\n*** How about converting from XML to JSON?"
require 'xml-simple'

xml = <<EOS
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

xml_clean = xml.gsub(/\s/, '')
xml_hash =  XmlSimple.xml_in(xml_clean , { 'ForceArray' => false })
xml_json = xml_hash.to_json

puts "Input xml string:", xml_clean
puts "\nConverted to a hash:", xml_hash
puts "\nConverted to a json string:", xml_json
