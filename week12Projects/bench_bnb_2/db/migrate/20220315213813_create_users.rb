class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true, index: true
      t.string :email, null: false, unique: true
      t.string :password_digest
      t.string :session_token, index: true

      t.timestamps
    end
  end
end