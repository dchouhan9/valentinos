class Menu < ActiveRecord::Migration
  def self.up
    create_table :menu do |t|
      t.integer :course_id
      t.string :title
      t.text :description
      t.decimal :price, :precision => 8, :scale => 2
      t.boolean :enabled
      t.timestamps
    end 
  end

  def self.down
    drop_table :menu
  end
end
