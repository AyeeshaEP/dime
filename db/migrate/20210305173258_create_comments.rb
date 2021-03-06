class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :rating
      t.references :user, null: false, foreign_key: true
      t.references :series, null: false, foreign_key: true

      t.timestamps
    end
  end
end
