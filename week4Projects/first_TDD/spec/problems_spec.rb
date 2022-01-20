require "rspec"
require "problems"

describe "remove_dups(arr)" do 
    it 'returns unique elements in the order in which they first appeared' do 
        expect(remove_dups([1,2,1,3,3])).to eq([1,2,3])
        expect(remove_dups([1,2,1,4,4])).to eq([1,2,4])
    end
end