class PolyTreeNode

    attr_reader :value, :parent, :children

    def initialize(value)
        # p val
        @value = value
        @parent = nil
        @children = []
    end

    # def parent=(node)
    #     @parent = node
    #     node.children + @children 
    # end
end

# a = PolyTreeNode.new('new_node')
# p a