class CreateMenus < ActiveRecord::Migration
  def self.up
    create_table :menus do |t|
      t.integer :course_id
      t.string :title
      t.string :description
      t.decimal :price
      t.boolean :enabled

      t.timestamps
    end
  end

  def self.down
    drop_table :menus
  end
end
