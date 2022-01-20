require "rspec"
require "problems"

describe "remove_dups(arr)" do 
    it 'returns unique elements in the order in which they first appeared' do 
        expect(remove_dups([1,2,1,3,3])).to eq([1,2,3])
        expect(remove_dups([1,2,1,4,4])).to eq([1,2,4])
    end
end

describe Array do
    context "Array#two_sum" do
        it 'finds all pairs of positions where the elements at those positions sum to zero' do
            expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
        end
    end
end
