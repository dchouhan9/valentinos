class Course < ActiveRecord::Migration
  def self.up
    create_table :course do |t|
      t.string :title
      t.integer :order
      t.timestamps
    end 
  end

  def self.down
    drop_table :course
  end
end
