class Manager < Employee

    def initialize(name, title, salary, boss)
        super
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
        if emp.boss == name
            @employees << emp
        end
    end
end