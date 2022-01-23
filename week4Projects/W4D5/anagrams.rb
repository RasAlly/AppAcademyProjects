require 'byebug'
def first_anagram?(str1, str2)
    anagrams = str1.split('').permutation.to_a
    anagrams.each do |subarr|
        if subarr.join('') == str2
            return true
        end
    end
    false
end 


def second_anagram?(str1, str2)
    str2arr = str2.split('')
    str1.each_char do |char|
        str2_idx = str2arr.index(char)
        return false if str2_idx.nil?
        str2arr.delete_at(str2_idx)
    end
    str2arr.empty? 
end

def third_anagram?(str1, str2)
    alpha = ('a'..'z').to_a
    new_str1 = ''
    new_str2 = ''
    alpha.each do |letter|
        str1.each_char do |char|
            new_str1 << char if letter == char
        end
        str2.each_char do |char|
            new_str2 << char if letter == char
        end
    end
    new_str1 == new_str2
end

def fourth_anagram?(str1, str2)
    new_hash1 = Hash.new(0)
    new_hash2 = Hash.new(0)

    str1.each_char do |char|
        new_hash1[char] += 1
    end
    str2.each_char do |char|
        new_hash2[char] += 1
    end
    new_hash1.each do |k, v|
        return false if new_hash2[k] != v
    end
    true
end

# p fourth_anagram?('elvis', 'lives')