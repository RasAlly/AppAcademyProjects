require_relative "employee.rb"
class Manager < Employee
    def initialize(name, title, salary)
        super(name, title, salary, boss=nil)
        @employees = []
    end

    def bonus(multiplier)
        sum = 0
        @employees.each do |emply|
            sum += emply.salary
        end
        sum * multiplier
    end

    def add_employee(emp)
        @employees << emp
    end
end