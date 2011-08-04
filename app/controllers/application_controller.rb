class ApplicationController < ActionController::Base
  protect_from_forgery
  
  # Load categories for all 
   before_filter :load_courses
   def load_courses
     @courses = Course.all
   end
  
end
