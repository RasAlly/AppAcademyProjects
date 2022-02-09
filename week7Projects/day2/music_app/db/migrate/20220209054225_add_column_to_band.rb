class AddColumnToBand < ActiveRecord::Migration[5.2]
  def change
    add_column :bands, :user_id, :integer, null: false
    add_index :bands, :user_id
  end
end
