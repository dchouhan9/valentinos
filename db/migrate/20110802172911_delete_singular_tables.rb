class DeleteSingularTables < ActiveRecord::Migration
  def self.up
    drop_table "course"
    drop_table "menu"
  end

  def self.down
  create_table :course do |t|
    t.string :title
    t.integer :order
    t.timestamps
  end
    
 create_table :menu do |t|
    t.integer :course_id
    t.string :title
    t.text :description
    t.decimal :price, :precision => 8, :scale => 2
    t.boolean :enabled
    t.timestamps
  end
  end
end
