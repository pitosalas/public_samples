class Space
  def is_free?
    false
  end
  def occupied?
    true
  end
  def charging_station?
    false
  end
  
  def occupying_car
    nil
  end

  def ok_for_suv?
    false
  end

  def set_property(suv, electric)
    @suv = suv
    @electric = electric
  end 
end
