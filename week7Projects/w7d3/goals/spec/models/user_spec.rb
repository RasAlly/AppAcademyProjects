require 'rails_helper'

RSpec.describe User, type: :model do
  #̶#̶#̶v̶a̶l̶i̶d̶a̶t̶e̶ p̶r̶e̶s̶e̶n̶c̶e̶ o̶f̶ u̶s̶e̶r̶n̶a̶m̶e̶ 
  #̶#̶#̶v̶a̶l̶i̶d̶a̶t̶e̶ u̶n̶i̶q̶u̶e̶n̶e̶s̶s̶ o̶f̶ u̶s̶e̶r̶n̶a̶m̶e̶ 
  #̶#̶#̶v̶a̶l̶i̶d̶a̶t̶e̶ u̶n̶i̶q̶u̶e̶n̶e̶s̶s̶ o̶f̶ s̶e̶s̶s̶i̶o̶n̶ t̶o̶k̶e̶n̶
  #̶#̶#̶v̶a̶l̶i̶d̶a̶t̶e̶ p̶r̶e̶s̶e̶n̶c̶e̶ o̶f̶ s̶e̶s̶s̶i̶o̶n̶_̶t̶o̶k̶e̶n̶
  #̶#̶#̶v̶a̶l̶i̶d̶a̶t̶e̶ p̶r̶e̶s̶e̶n̶c̶e̶ o̶f̶ p̶a̶s̶s̶w̶o̶r̶d̶_̶d̶i̶g̶e̶s̶t̶
  #̶c̶h̶e̶c̶k̶ p̶a̶s̶s̶w̶o̶r̶d̶ l̶e̶n̶g̶t̶h̶
  #̶U̶s̶e̶r̶ h̶a̶s̶ m̶a̶n̶y̶ c̶o̶m̶m̶e̶n̶t̶s̶ 
  #̶U̶s̶e̶r̶ h̶a̶s̶ m̶a̶n̶y̶ g̶o̶a̶l̶s̶
  #̶U̶s̶e̶r̶ h̶a̶s̶ m̶a̶n̶y̶ g̶o̶a̶l̶s̶ c̶o̶m̶m̶e̶n̶t̶e̶d̶
  #test all SPIRE methods

  context 'validations' do

    it {should validate_presence_of(:username)}
    it {should validate_presence_of(:session_token)}
    it {should validate_presence_of(:password_digest)}
    it {should validate_length_of(:password).is_at_least(6)}

    before(:each) do
      create(:user)
    end

    it {should validate_uniqueness_of(:username)}
    it {should validate_uniqueness_of(:session_token)}

  end

  context 'associations' do

    it {should have_many(:goals).class_name(:Goal)}
    it {should have_many(:comments).class_name(:Comment)}
    it {should have_many(:goals_commented).through(:comments).source(:goal)}
    
  end

  describe "is_password?" do 
    let!(:user){create(:user)}

    context "with a valid password" do
      it "should return true" do
        expect(user.is_password?("password")).to be true
      end
    end

    context "with invalid password" do
      it "should return false" do
        expect(user.is_password?("notpassword")).to be false
      end
    end
  end

  describe 'password hashing' do
    it 'does not save password to the database' do
      create(:harry_potter)
      user = User.find_by(username: 'Harry Potter')
      expect(user.password).not_to eq("password")
    end

    it 'hashes password using BCrypt' do
      expect(BCrypt::Password).to receive(:create).with('passwordcheck')
      FactoryBot.build(:user, password:'passwordcheck')
    end
  end

end
