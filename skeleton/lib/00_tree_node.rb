class PolyTreeNode

    attr_reader :value, :parent, :children

    def initialize(value)
        # p val
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(node)
        # p node
        @parent = node 
        if node != nil
            node.children << self if !node.children.include?(self)
        end
        if node != nil && node.parent != nil 
            i = node.parent.children.index(self)
            node.parent.children.delete_at(i)
        end
    end

    def add_child(child)
        child.parent=(self)
    end

    def remove_child(child)
        raise if child.parent == nil
        child.parent = nil
    end
end

# a = PolyTreeNode.new('new_node')
# b = PolyTreeNode.new('different_node')
# a.parent=(b)