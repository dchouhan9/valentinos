class RenameCourseOrderField < ActiveRecord::Migration
  
  def self.up
    change_table :courses do |t|
      t.rename :order, :display_order
    end
  end

  def self.down
    change_table :courses do |t|
      t.rename :display_order, :order
    end
  end
  
end
