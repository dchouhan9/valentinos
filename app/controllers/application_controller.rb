class ApplicationController < ActionController::Base
  protect_from_forgery
  
  # Load categories for all 
   before_filter :load_courses
   def load_courses
     @courses = Course.order("display_order")
   end
  
end
