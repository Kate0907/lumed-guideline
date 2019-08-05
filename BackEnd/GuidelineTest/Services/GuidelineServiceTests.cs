using Microsoft.VisualStudio.TestTools.UnitTesting;
using Guideline.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Guideline.Models;

namespace Guideline.Services.Tests
{

  [TestClass()]
  public class ItemServiceTests
  {
    private ItemService _Service;

    [TestInitialize]
    public void BeforeEach()
    {
      _Service = new ItemService();
      string filename = "guideline";
      // ItemDb.Deserialize();
      ItemDb.DeserializeFromFile(filename);
    }

    [TestMethod()]
    public void TestGetAllItems_ShouldReturnAListOfAllItems()
    {
      var result = _Service.GetAllItems();
      Assert.AreEqual(ItemDb.ITEMS.Count, result.Count());
    }

    [TestMethod()]
    public void TestGet_ItemWithId_ShouldReturnThatItem()
    {
      var result = _Service.Get(0);
      Assert.AreEqual("Elephant and Piggie", result.name);
    }

    [TestMethod()]
    [ExpectedException(typeof(NullReferenceException))]
    public void TestGet_WithUnexistItem_ShouldThrowNullReferenceException()
    {
      _Service.Get(456);
    }

    [TestMethod()]
    public void TestCreateNewItem_WithoutParentId_ShouldCreateItemNotAddToParentsChildrenIds()
    {
      var total = ItemDb.ITEMS.Count();
      Assert.AreEqual(ItemDb.LastId, 101);
      var result = _Service.createNewItem(ItemType.Checkbox);
      Assert.AreEqual(total + 1, ItemDb.ITEMS.Count());
      Assert.AreEqual(ItemDb.LastId, 102);
    }

    [TestMethod()]
    public void TestCreateNewItemAndAddTo_WithParentIdAndType_ShouldAddNewItemIdToParentsChildrenIds()
    {
      var parent = ItemDb.ITEMS.FirstOrDefault(item => item.id == 10);
      Assert.AreEqual(1, parent.childrenIds.Count());
      _Service.createNewItemAndAddTo(10, ItemType.Checkbox);
      Assert.AreEqual(2, parent.childrenIds.Count());
      Assert.AreEqual(parent.childrenIds[1], ItemDb.LastId - 1);
      var id = parent.childrenIds[1];
      var newCreate = ItemDb.ITEMS.FirstOrDefault(item => item.id == id);
      Assert.AreEqual(newCreate.type, ItemType.Checkbox);
      Assert.AreEqual(newCreate.name, "New Checkbox");
    }

    [TestMethod()]
    [ExpectedException(typeof(NullReferenceException))]
    public void TestCreateNewItemAndAddTo_WithParentIdNotExist_ShouldThrowException()
    {
      _Service.createNewItemAndAddTo(500, ItemType.Checkbox);
    }

    //UpdateItem_WithNull_ShouldReturn
    //UpdateItem_WithItemThatDoesntExist_

    [TestMethod()]
    public void TestUpdateUnItem_WithANewItem_ShouldUpdateOldItemNameAndChildrenIdsWithNewItem()
    {
      var oldItem = ItemDb.ITEMS.FirstOrDefault(item => item.id == 100);
      var childrenIds = new List<int> { 70, 71, 72, 73, 74 };
      Assert.AreEqual("The Magic School Bus Questionnaire", oldItem.name);
      Assert.AreEqual(childrenIds.Count, oldItem.childrenIds.Count);
      for (var i = 0; i < childrenIds.Count; i++)
      {
        Assert.AreEqual(childrenIds[i], oldItem.childrenIds[i]);
      }
      var newItem = _Service.createNewItem(ItemType.Questionnaire);
      newItem.name = "Aladin";
      newItem.childrenIds = new List<int> { 30, 40, 50 };
      newItem.id = oldItem.id;
      _Service.Update(newItem);
      Assert.AreEqual("Aladin", oldItem.name);
      Assert.AreEqual(3, oldItem.childrenIds.Count);
      for (var i = 0; i < newItem.childrenIds.Count; i++)
      {
        Assert.AreEqual(oldItem.childrenIds[i], newItem.childrenIds[i]);
      }

    }

    [TestMethod()]
    [ExpectedException(typeof(NullReferenceException))]
    public void TestUpdate_WithNull_ShouldThrowException()
    {
      _Service.Update(null);
    }

    [TestMethod()]
    [ExpectedException(typeof(NullReferenceException))]
    public void TestUpdate_WithItemNotExist_ShouldThrowException()
    {
      var newItem = new Item();
      Assert.AreEqual(0, newItem.id);
      newItem.id = 300;
      Assert.AreEqual(300, newItem.id);
      _Service.Update(newItem);
    }

    [TestMethod()]
    public void Delete_WithValidId_ShouldDelete()
    {
      var total = ItemDb.ITEMS.Count;
      _Service.Delete(14);
      Assert.AreEqual(ItemDb.ITEMS.Count, total - 1);
      Assert.IsNull(ItemDb.ITEMS.FirstOrDefault(item => item.id == 14));
    }

    [TestMethod()]
    [ExpectedException(typeof(NullReferenceException))]
    public void Delete_WithAnUnexistItem_ShouldThrowException()
    {
      _Service.Delete(500);
    }

  }
}
